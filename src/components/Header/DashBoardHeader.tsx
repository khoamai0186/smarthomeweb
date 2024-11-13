import { Typography } from "@mui/material";

type DashBoardHeaderProps = {
  title: string;
  // subtitle: string;
  className?: string;
};

export default function DashBoardHeader({
  title,
  // subtitle,
  className,
}: DashBoardHeaderProps) {
  return (
    <div className={className}>
      <Typography variant="h4" fontWeight={"bold"} sx={{ m: "0 0 3px 0" }}>
        {title}
      </Typography>
      {/* <Typography variant="h6">{subtitle}</Typography> */}
    </div>
  );
}
