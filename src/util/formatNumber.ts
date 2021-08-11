
export default function formatNumber(n: number): string
{
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
