// declare module '*.svg';
declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}
