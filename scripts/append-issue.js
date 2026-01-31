#!/usr/bin/env node
/**
 * Append an issue to issues.csv (alternative to Linear)
 * Usage: node append-issue.js "Title" "TL;DR" "bug|feature|improvement" "low|normal|high"
 *
 * Or pipe from clipboard - paste the formatted issue and run with minimal args.
 */

const fs = require('fs');
const path = require('path');

const ISSUES_FILE = path.join(process.cwd(), 'ISSUES.csv');
const HEADERS = 'ID,Title,TLDR,Type,Priority,Status,Created,Notes';

function ensureFileExists() {
  if (!fs.existsSync(ISSUES_FILE)) {
    fs.writeFileSync(ISSUES_FILE, HEADERS + '\n', 'utf8');
  }
}

function getNextId() {
  ensureFileExists();
  const content = fs.readFileSync(ISSUES_FILE, 'utf8');
  const lines = content.trim().split('\n').filter(Boolean);
  if (lines.length <= 1) return 1;
  const lastLine = lines[lines.length - 1];
  const firstCol = lastLine.split(',')[0];
  const id = parseInt(firstCol, 10);
  return isNaN(id) ? 1 : id + 1;
}

const args = process.argv.slice(2);
const title = args[0] || 'Untitled';
const tldr = (args[1] || '').replace(/,/g, ';');
const type = args[2] || 'feature';
const priority = args[3] || 'normal';
const notes = (args[4] || '').replace(/,/g, ';');

ensureFileExists();
const id = getNextId();
const created = new Date().toISOString().slice(0, 10);
const row = [id, `"${title}"`, `"${tldr}"`, type, priority, 'Backlog', created, `"${notes}"`].join(',');

fs.appendFileSync(ISSUES_FILE, row + '\n', 'utf8');
console.log(`Added issue #${id} to ${ISSUES_FILE}`);
console.log(row);
