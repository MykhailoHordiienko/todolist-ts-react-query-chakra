const divRoot = document.querySelector('#root');
const classValue = divRoot?.classList;

export const handleDarkMod = () => {
  if (classValue) {
    classValue.add('dark');
    classValue.remove('white');
  }
};
export const handleWhiteMod = () => {
  if (classValue) {
    classValue.add('white');
    classValue.remove('dark');
  }
};
