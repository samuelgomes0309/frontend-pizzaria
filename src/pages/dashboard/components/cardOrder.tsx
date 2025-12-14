import type { OrderProps } from "../../../contexts/app/AppProvider";

interface CardOrderProps {
	item: OrderProps;
	modal: (order_id: string, modalVisible: boolean) => Promise<void>;
}

export default function CardOrder({ item, modal }: CardOrderProps) {
	return (
		<div
			className="bg-[#101026]  w-full rounded-lg flex text-white font-medium transition-all duration-500 border border-transparent hover:border-[#3fffa3] cursor-pointer "
			onClick={() => modal(item.id, true)}
		>
			<div className="bg-[#3fffa3] w-2 border-2 border-[#3fffa3] rounded-bl-lg rounded-tl-lg"></div>
			<span className="py-2 ml-3">Mesa - {item.table}</span>
		</div>
	);
}
