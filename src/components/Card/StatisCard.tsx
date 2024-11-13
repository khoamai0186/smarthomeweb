import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { ReactNode } from "react";
import { IconContext } from "react-icons";

type StatisticProps = {
  title: string;
  value: string;
  icon: ReactNode | string;
  color: string;
  sx?: object;
  other?: object;
};

export default function Statistic({
  title,
  value,
  icon,
  color = "primary",
  sx,
  other,
}: StatisticProps) {
  return (
    <div className="relative">
      <Card
        sx={{
          py: 1,
          borderRadius: 2,
          ...sx,
        }}
        {...other}
      >
        <CardContent>
          <Typography className="text-gray-500">{title}</Typography>
          <div className="flex flex-row">
            <Typography variant="h4">{value}</Typography>
            <div>{/* <Typography>35</Typography> */}</div>
          </div>
        </CardContent>
      </Card>
      <div>
        <Card
          className={`flex absolute right-3 -top-7 h-20 w-20  items-center justify-center`}
          style={{
            backgroundColor: `${color}`,
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <IconContext.Provider value={{ size: "30" }}>
            {icon}
          </IconContext.Provider>
        </Card>
      </div>
    </div>
  );
}
