function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer flex items-center justify-center gap-2 w-full bg-neutral-900 hover:bg-neutral-700 text-neutral-50 duration-150 ease-in-out h-full py-2"
    >
      {children}
    </button>
  );
}

export default Button;
