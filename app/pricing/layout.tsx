import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans & Packages | Stock Buckets Research Company",
  description:
    "Explore our structured subscription plans across Indian Equity, Futures, Options, and MCX Commodity segments. Transparent pricing, no profit sharing.",
  alternates: {
    canonical: "https://stockbucketresearchfirm.co/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
