import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Payment Instructions | Stock Buckets Research Company",
  description:
    "Review official payment options, bank details, and QR codes for Stock Buckets subscription activation.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
