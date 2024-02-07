export const readFile = ({ file, onLoad }: { file: any; onLoad: any }) => {
  if (file) {
    var reader = new FileReader();
    reader.onload = ({ target }: { target: any }) => onLoad(target.result);
    reader.readAsDataURL(file);
  }
};
