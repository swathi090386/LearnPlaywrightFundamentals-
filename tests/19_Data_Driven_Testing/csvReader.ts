import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface TestDataRow {
    [key: string]: string;
}

export function readCSV(filePath: string): TestDataRow[] {
    const fullPath = path.resolve(__dirname, filePath);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const lines = content.trim().split('\n');

    if (lines.length === 0) {
        return [];
    }

    const delimiter = lines[0].includes('\t') ? '\t' : ',';
    const headers = lines[0].split(delimiter).map(header => header.trim());

    const data: TestDataRow[] = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(delimiter);
        const row: TestDataRow = {};
        for (let j = 0; j < headers.length; j++) {
            row[headers[j]] = values[j]?.trim() || "";
        }
        data.push(row);
    }

    return data;




}