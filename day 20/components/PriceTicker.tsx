import { useQuery, gql } from "@apollo/client";

const GET_PRICE = gql`
  query GetPrice($address: String!, $blockSize: Int!) {
    GetFeed(
      Filter: "",
      BlockSizeSeconds: $blockSize,
      BlockShiftSeconds: $blockSize,
      FeedSelection: [
        {
          Address: $address,
          Blockchain: "Ethereum",
          Exchangepairs: []
        }
      ]
    ) {
      Time
      Value
    }
  }
`;

const PriceTicker: React.FC<{
  name: string;
  address: string;
  blockSize: number;
}> = ({ name, address, blockSize }) => {
  const { data, loading, error } = useQuery(GET_PRICE, {
    variables: { address, blockSize },
    pollInterval: blockSize * 1000, // match update frequency
  });

  const price = data?.GetFeed?.[0]?.Value;
  const timestamp = data?.GetFeed?.[0]?.Time;

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-xl rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">{name} Price</h2>
      {loading ? (
        <p className="text-gray-500">Loading…</p>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <div>
          <span className="text-4xl font-mono">${price}</span>
          <p className="text-gray-400 text-sm mt-2">
            As of {new Date(timestamp * 1000).toLocaleTimeString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default PriceTicker