import { useState } from "react";

const AutoComplete = () => {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState([]);
    // const [selectedItem, setSelectedItem] = useState("");

    const suggestions = [
        { id: 1, label: "Apple" },
        { id: 2, label: "Banana" },
        { id: 3, label: "Blueberry" },
        { id: 4, label: "Cherry" },
        { id: 5, label: "Grapes" },
        { id: 6, label: "Mango" },
        { id: 7, label: "Orange" },
        { id: 8, label: "Peach" },
        { id: 9, label: "Pineapple" },
        { id: 10, label: "Strawberry" },
        { id: 11, label: "Watermelon" },
    ];

    const handleChange = (userInput:string) => {
        if (!userInput) {
            setItems([]);
            // setSelectedItem("");
            return;
        }
        const filterArray = suggestions.filter((suggestion) =>
            suggestion.label.toLowerCase().includes(userInput.toLowerCase())
        );
        setItems(filterArray);
    };

    const handleSelect = (selected:string) => {
        // setSelectedItem(selected);
        setItems([]);
        setQuery(selected);
    };

    return (
        <div className="w-90 flex  flex-col gap-5">
            <div className="text-center text-2xl font-bold">
                Autocomplete Component
            </div>
            <input
                value={query}
                type="text"
                placeholder="Enter your query"
                className="w-full p-3 font-semibold border-b border-slate-400 outline-none"
                onChange={(e) => {
                    const input = e.target.value;
                    setQuery(input);
                    handleChange(input);
                }}
            />

            <div className="">
                {items.length === 0 ? (
                    <div className="text-slate-500 p-2 text-center italic">
                        Nothing to show
                    </div>
                ) : (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="border-b border-slate-400 p-2 cursor-pointer"
                            onClick={() => handleSelect(item.label)}
                        >
                            {item.label}
                        </div>
                    ))
                )}
            </div>
            {/* <div className="mt-2 text-green-400 text-center text-xl font-semibold">
                Selected Item: {selectedItem}
            </div> */}
        </div>
    );
};

export default AutoComplete;
