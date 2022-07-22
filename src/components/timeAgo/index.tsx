import { FC } from "react";

// bad types :(
// @ts-ignore
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

// components
import RTimeAgo from "react-timeago";

interface Props {
  date: string;
}

const TimeAgo: FC<Props> = ({ date }) => {
  return (
    <RTimeAgo
      date={date}
      formatter={buildFormatter({
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "",
        suffixFromNow: "now",
        seconds: "now",
        minute: "1 min",
        minutes: "%d m",
        hour: "1 h",
        hours: "%d h",
        day: "a day",
        days: "%d d",
        month: "1 m",
        months: "%d m",
        year: "1 y",
        years: "%d y",
        wordSeparator: " ",
      })}
    />
  );
};

export default TimeAgo;
