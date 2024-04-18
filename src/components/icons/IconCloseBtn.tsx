import { MouseEvent } from "react";

import { IconButton } from "@material-tailwind/react";

type Props = { 
  onClickClose: (event: MouseEvent<HTMLElement>) => void
};

const IconCloseBtn = ({onClickClose}: Props) => {
    return (
        <IconButton variant="text" color="blue-gray" onClick={onClickClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
    )
}

export default IconCloseBtn;