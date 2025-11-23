import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const historyPath = path.join(process.cwd(), '../../data/solar-generator-history.json');
    const history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));

    const latest = history.entries[history.entries.length - 1];

    return NextResponse.json({
      version: history.version,
      date: latest.date,
      running_reserve_total: latest.running_reserve_total,
      generated_today: latest.generated_solar,
      redeemed_today: latest.redeemed_solar
    });

  } catch (e) {
    return NextResponse.json({ error: "Solar Reserve unavailable", details: String(e) }, { status: 500 });
  }
}
