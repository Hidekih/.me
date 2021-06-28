type LogoColors = {
  github: {
    [key: string]: string;
  };
  reactjs: {
    [key: string]: string;
  };
  html: {
    [key: string]: string;
  };
  css: {
    [key: string]: string;
  };
  javascript: {
    [key: string]: string;
  };
  typescript: {
    [key: string]: string;
  };
  sass: {
    [key: string]: string;
  };
}

const LogoColorPicker = {} as LogoColors;

Object.assign(LogoColorPicker, { ...LogoColorPicker, github: { primary: '#333'}});
Object.assign(LogoColorPicker, { ...LogoColorPicker, reactjs: { primary: '#61DBFB' }});

Object.assign(LogoColorPicker, { ...LogoColorPicker, javascript: { primary: '#f7df1e' }});
Object.assign(LogoColorPicker, { ...LogoColorPicker, typescript: { primary: '#3178c6' }});
Object.assign(LogoColorPicker, { ...LogoColorPicker, html: { primary: '#e34f26' }});
Object.assign(LogoColorPicker, { ...LogoColorPicker, css: { primary: '#264de4' }});
Object.assign(LogoColorPicker, { ...LogoColorPicker, sass: { primary: '#cc6699' }});
// Object.assign(LogoColorPicker, { ...LogoColorPicker, : { primary: '' }});

export default LogoColorPicker;
