import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Web Development",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga est modi soluta quod dolorem quisquam fugiat maiores minus praesentium iure, cumque explicabo mollitia excepturi consequuntur ipsa, natus nam ipsam nemo.",
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Web Design",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga est modi soluta quod dolorem quisquam fugiat maiores minus praesentium iure, cumque explicabo mollitia excepturi consequuntur ipsa, natus nam ipsam nemo.",
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "App Design",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga est modi soluta quod dolorem quisquam fugiat maiores minus praesentium iure, cumque explicabo mollitia excepturi consequuntur ipsa, natus nam ipsam nemo.",
  },
]

export default services
