interface Props {
  city: string;
  setCity: React.Dispatch<
    React.SetStateAction<string>
  >;
  onSearch: () => void;
  onLocation: () => void;
}

function Search({
  city,
  setCity,
  onSearch,
  onLocation,
}: Props) {
  return (
    <div className="flex gap-2">
      <input
        className="flex-1 border rounded-xl px-4 py-3 outline-none"
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
        placeholder="Şəhər daxil edin"
      />

      <button
        onClick={onSearch}
        className="bg-blue-500 text-white px-4 rounded-xl"
      >
        Search
      </button>

      <button
        onClick={onLocation}
        className="bg-green-500 text-white px-4 rounded-xl"
      >
        📍
      </button>
    </div>
  );
}

export default Search;