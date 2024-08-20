Implement Redux for State Management
Set Up Redux:

Install Redux and React-Redux if not already included:

npm install redux react-redux


STRUCTURE:

src/
|-- components/
|   |-- Button.tsx
|   |-- Input.tsx
|   |-- Header.tsx
|   |-- Footer.tsx
|
|-- pages/
|   |-- Login.tsx
|   |-- Register.tsx
|   |-- Dashboard.tsx
|
|-- styles/
|   |-- components/
|   |   |-- Button.module.scss
|   |   |-- Input.module.scss
|   |
|   |-- pages/
|   |   |-- Login.module.scss
|   |   |-- Register.module.scss
|   |
|   |-- global.scss
|
|-- App.tsx
|-- index.tsx


New-Item -Path "Input.tsx" -ItemType File


To use styles:
npm install sass

npm install @types/node --save-dev

./src/styles/__.modules.scss

mkdir .types/global.d.ts
// global.d.ts
declare module '*.module.scss' {
    const content: { [className: string]: string };
    export default content;
  }