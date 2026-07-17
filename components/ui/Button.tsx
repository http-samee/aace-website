type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className="rounded-lg bg-[#1E3A8A] px-6 py-3 font-semibold text-white transition hover:bg-[#F4B400] hover:text-[#1E3A8A]"
    >
      {props.text}
    </button>
  );
}