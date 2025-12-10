import type { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
	return (
		<div className="mx-auto my-auto w-full max-w-7xl flex">{children}</div>
	);
}
