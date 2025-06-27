import { useState } from "react";

const Calculator = () => {
    interface Ops {
        name: string;
        value: string;
    }

    const ops: Ops[] = [
        { name: "C", value: "clear" },
        { name: "Back", value: "back" },
        { name: "%", value: "%" },
        { name: "/", value: "/" },
        { name: "7", value: "7" },
        { name: "8", value: "8" },
        { name: "9", value: "9" },
        { name: "X", value: "*" },
        { name: "4", value: "4" },
        { name: "5", value: "5" },
        { name: "6", value: "6" },
        { name: "-", value: "-" },
        { name: "1", value: "1" },
        { name: "2", value: "2" },
        { name: "3", value: "3" },
        { name: "+", value: "+" },
        { name: "+/-", value: "toggle-sign" },
        { name: "0", value: "0" },
        { name: ".", value: "." },
        { name: "=", value: "equals" },
    ];

    const [userInput, setUserInput] = useState<string>("");
    const [showValues, setShowValues] = useState<string>("");

    const handleClick = (op:Ops) => {
        if (op.value === "back") {
            setUserInput((prev) => prev.slice(0, -1));
            setShowValues((prev) => prev.slice(0, -1));
            return;
        }

        if (op.value === "clear") {
            setUserInput("");
            setShowValues("");
            return;
        }
        if (op.value === "equals") {
            try {
                const ans = eval(userInput);
                setUserInput(ans);
                setShowValues(ans);
                return
            } catch (error) {
                console.error(error);
                setUserInput("illigal Expression");
            }
        }
        setUserInput((prev) => prev + op.value);
        setShowValues((prev) => {
            if (op.value === "*") return prev + "X";
            return prev + op.name;
        });
    };

    return (
        <div className="w-100">
            <div className="font-bold text-3xl mb-5 text-center text-white">
                Calculator
            </div>
            <div className="bg-slate-300 flex flex-col gap-1 w-full border rounded-lg border-gray py-4 px-2">
                <div className="overflow-x-scroll screen text-right px-2 py-4 bg-slate-100 rounded-lg text-xl">
                    {showValues ? (
                        showValues
                    ) : (
                        <p className="text-gray-400">Enter Something...</p>
                    )}
                </div>
                <div className="p-2 grid grid-cols-4 gap-4 text-center">
                    {/* <div className="p-2 bg-slate-100 cursor-pointer rounded-lg">C</div> */}
                    {ops.map((op) => (
                        <div
                            key={op.value}
                            className="odd:bg-black odd:text-white text-md flex items-center justify-center p-2 bg-slate-100 cursor-pointer rounded-lg"
                            onClick={() => handleClick(op)}
                        >
                            {op.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
