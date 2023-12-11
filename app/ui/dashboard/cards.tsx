import {
  BanknotesIcon,
  ClockIcon,
  UsersIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import { rubik } from '@/app/ui/fonts';

const iconMap = {
  earned: BanknotesIcon,
  sellers: UsersIcon,
  awaiting: ClockIcon,
  invoices: ClipboardDocumentIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* Attention! Uncomment this section when you reach this stage in the course. */}

      {/* <Card title="Earned" value={totalFulfilledInvoices} type="earned" />
      <Card title="In Progress" value={totalAwaitingInvoices} type="awaiting" />
      <Card title="All Invoices" value={numberOfInvoices} type="invoices" />
      <Card title="Total Sellers" value={numberOfSellers} type="sellers" /> */}
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'sellers' | 'awaiting' | 'earned';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${rubik.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
