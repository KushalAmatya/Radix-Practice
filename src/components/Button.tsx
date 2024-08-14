type ButtonProps = {
  isSuccess: boolean | undefined;
  value: string;
};

export const Button = ({ isSuccess, value }: ButtonProps) => {
  return (
    <button
      className={`${
        isSuccess == true
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-violet-900 hover:bg-violet-950/75"
      } p-2 px-2 rounded-md text-white`}
    >
      {value}
    </button>
  );
};
