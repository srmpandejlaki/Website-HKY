// import semua file .scss dari subfolder styles

const style = import.meta.glob([
  './**/*.scss',
  '../shared/**/*.scss',
  '../features/**/*.scss',
], { eager: true });