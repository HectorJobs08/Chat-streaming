export interface ButtonInterface {
    id: string;
    type: "submit" | "button";
    onClick: Function;
    classesName?: string;
    content: React.ReactElement,
}