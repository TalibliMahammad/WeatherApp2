interface Props {
  dark: boolean;
  toggle: () => void;
}

function ThemeButton({
  dark,
  toggle,
}: Props) {

    
  return (
    <button
      onClick={toggle}
      className="
      absolute
      top-5
      right-5
      bg-slate-700
      text-white
      p-3
      rounded-full
      "
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeButton;