import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RPM Client Onboarding Portal | Stock Buckets Research Company",
  description:
    "Complete your mandatory 16-point Risk Profile Management (RPM) assessment to activate your research desk.",
  alternates: {
    canonical: "https://stockbucketresearchfirm.co/rpm",
  },
};

export default function RpmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
