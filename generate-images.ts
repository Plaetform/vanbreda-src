import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("❌ Zet GEMINI_API_KEY als environment variable of in .env");
  console.error("   export GEMINI_API_KEY='jouw-key-hier'");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const OUTPUT_DIR = path.resolve("public");

interface ImageJob {
  name: string;
  prompt: string;
  inputImages?: string[];
}

const jobs: ImageJob[] = [
  {
    name: "img-sophie-portrait",
    prompt: `A close-up portrait photograph of a woman, 41 years old, with shoulder-length dark blonde hair, light brown eyes. She is looking directly into the camera with a serious, earnest expression. Not smiling. Not sad. Determined and trusting — as if she is addressing a room full of professionals and asking them to do their best for her.

She wears a simple cream-colored knit sweater. The background is softly blurred — warm, neutral, suggesting a home environment but not distracting. The lighting is soft and directional from the left, creating gentle shadows on her face. 

This is a woman who has been through something difficult and is now speaking with quiet strength. Her eyes say: "I'm counting on you."

Style: cinematic portrait photography, shallow depth of field, warm golden color grading, natural skin tones. The composition is intimate — her face fills most of the frame, with just her shoulders visible. No makeup heavy look — natural, real, relatable. Aspect ratio: portrait 3:4.`,
  },
  {
    name: "img-sophie-hospital",
    prompt: `A cinematic photograph taken in a French hospital. A woman (41, shoulder-length dark blonde hair, cream sweater under a hospital gown) sits alone on the edge of a hospital bed. The room is clinical and unfamiliar — French text visible on signs in the soft background. A window shows it's evening outside.

She is looking down at her hands, which rest on her lap. Her posture conveys vulnerability and exhaustion — she's been through an emergency surgery and is recovering alone in a foreign country. A small overnight bag sits on a chair nearby — she wasn't prepared for this.

The lighting is cool hospital fluorescent mixed with warm evening light from the window, creating a contrast between the clinical environment and her human warmth. The mood is loneliness, uncertainty, and quiet resilience.

Style: cinematic documentary photography, slightly desaturated, shallow depth of field with the woman in focus. The composition places her slightly off-center with empty space around her emphasizing her isolation. No other people visible. Aspect ratio: landscape 4:3.`,
  },
  {
    name: "img-sophie-worry",
    prompt: `A cinematic photograph of a woman (41, dark blonde hair, wearing a hospital gown over a cream sweater) sitting alone at a small table in a French hospital room. She is holding a phone pressed to her ear with one hand, while her other hand rests on scattered hospital paperwork on the table.

We see her from a side angle — her profile is visible, looking down at the documents while she listens on the phone. Her expression is worried, uncertain. The paperwork in front of her includes French hospital invoices, forms with "FACTURE" and "CHU" headers, and a handwritten note that says "Couverture?" with a question mark.

A pen lies across one document. The papers are slightly messy, overlapping — she's been trying to figure things out alone. The phone is pressed to her ear (we see the back of the phone, not the screen).

The background is a hospital room — clinical, with soft evening light from a window. The mood is anxiety, bureaucratic overwhelm, and loneliness.

Style: cinematic documentary photography, warm side-lighting, shallow depth of field with Sophie and papers in focus. The composition emphasizes the contrast between the human moment (phone call) and the cold paperwork. Aspect ratio: landscape 4:3.`,
  },
  {
    name: "img-sophie-happy",
    prompt: `A warm, joyful summer photograph. A woman (41, shoulder-length dark blonde hair, tanned skin, wearing a light linen blouse) is sitting at an outdoor table on a sunny terrace in summer. She is laughing genuinely, her head tilted slightly back with pure happiness. 

Around her at the table: her husband (mid-40s, casual polo shirt) and two children (a girl around 12 and a boy around 9). They are having a summer lunch together — a carafe of rosé, colorful salads, bread. The children are laughing too.

The setting is a garden terrace in Belgium — green hedges, a parasol casting dappled shadows, a typical Belgian brick house partially visible in the background. Everything radiates warmth, relief, gratitude — the feeling that everything turned out well.

The woman (Sophie) is the clear subject — she is in focus while the family is slightly soft. Her expression says: "I made it through. Life is beautiful."

Style: candid family photography, golden hour warm light, shallow depth of field on Sophie, slightly overexposed highlights for a dreamy summer feel. Color palette: warm golds, soft greens, linen whites. Natural, unposed, intimate. Aspect ratio: landscape 4:3.`,
  },
];

async function generateImage(job: ImageJob) {
  console.log(`🎨 Generating: ${job.name}...`);

  const contents: any[] = [];

  if (job.inputImages) {
    for (const imgPath of job.inputImages) {
      if (fs.existsSync(imgPath)) {
        const imageData = fs.readFileSync(imgPath);
        const base64 = imageData.toString("base64");
        const mimeType = imgPath.endsWith(".png") ? "image/png" : imgPath.endsWith(".svg") ? "image/png" : "image/jpeg";
        contents.push({
          inlineData: { mimeType, data: base64 },
        });
        console.log(`   📎 Input image: ${imgPath}`);
      }
    }
  }

  contents.push({ text: job.prompt });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-image",
      contents: [{ role: "user", parts: contents }],
      config: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const ext = part.inlineData.mimeType?.includes("png") ? "png" : "png";
          const outPath = path.join(OUTPUT_DIR, `${job.name}.${ext}`);
          const buffer = Buffer.from(part.inlineData.data!, "base64");
          fs.writeFileSync(outPath, buffer);
          console.log(`   ✅ Saved: ${outPath} (${(buffer.length / 1024).toFixed(0)} KB)`);
          return outPath;
        }
      }
    }
    console.log(`   ⚠️ No image in response`);
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.text) console.log(`   💬 ${part.text.slice(0, 200)}`);
      }
    }
  } catch (err: any) {
    console.error(`   ❌ Error: ${err.message}`);
  }
}

async function main() {
  console.log("🖼️  Dossier 2030 — Cover Image Generator");
  console.log("==========================================\n");

  for (const job of jobs) {
    const outPath = path.join("public", `${job.name}.png`);
    if (fs.existsSync(outPath)) {
      console.log(`⏭️  Skipping ${job.name} — already exists`);
      continue;
    }
    await generateImage(job);
    console.log();
  }

  console.log("✅ Done! Check public/ for the generated images.");
}

main();
