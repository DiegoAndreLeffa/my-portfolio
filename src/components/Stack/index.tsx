import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { JSX } from "react";
import { IconType } from "react-icons/lib";

interface StackProps {
  title: string;
  icon: string | IconType;
  id: number;
}

export const Stack = ({ title, icon: Icon, id }: StackProps): JSX.Element => {
  const isString = typeof Icon === "string";

  return (
    <StackCard className={`${id}`}>
      <Text>{title}</Text>
      {isString ? (
        <img src={Icon} alt={title} title={title} height="84px" width="84px" />
      ) : (
        <Icon size={84} color="#868E96" />
      )}
    </StackCard>
  );
};
