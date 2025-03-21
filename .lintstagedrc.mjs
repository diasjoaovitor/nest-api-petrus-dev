import path from 'node:path'

const buildCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f))
  return [
    `npx eslint --fix ${files.join(' ')}`,
    `npx prettier --write ${files.join(' --file ')}`,
    `npx jest --runInBand --findRelatedTests ${files.join(' ')} --passWithNoTests`
  ]
}

export default {
  '*.ts': [buildCommand]
}
