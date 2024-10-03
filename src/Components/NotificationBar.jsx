import { List, Avatar, Typography } from "antd";
import { useSelector } from 'react-redux'
import { motion } from "framer-motion";
import bug from "../assets/bug.svg"
import user from "../assets/nft_user.svg"
import podcast from "../assets/podcast.svg"
import bar from "../assets/bar.svg"
import bar_white from "../assets/bar_white.svg"

const { Text } = Typography;

const notifications = [
  {
    title: "You have a bug that needs attention",
    time: "Just now",
    icon: <img src={bug}/>,
  },
  {
    title: "New user registered",
    time: "59 minutes ago",
    icon:<img src={user}/>,
  },
  {
    title: "You have a bug that needs attention",
    time: "12 hours ago",
    icon: <img src={bug}/>,
  },
  {
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    icon: <img src={podcast}/>,
  },
];

const activities = [
  {
    title: "You have a bug that needs...",
    time: "Just now",
  },
  {
    title: "Released a new version",
    time: "59 minutes ago",
  },
  {
    title: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

const contacts = [
  { name: "Natali Craig", avatar: "N" },
  { name: "Drew Cano", avatar: "D" },
  { name: "Orlando Diggs", avatar: "O" },
  { name: "Andi Lane", avatar: "A" },
  { name: "Kate Morrison", avatar: "K" },
  { name: "Koray Okumus", avatar: "K" },
];

const NotificationBar = () => {
  const dark = useSelector((state) => state.theme.value)

  return (
    <div
    className={dark ? "black" : "white"}
      style={{
        width: 300,
        padding: 20,
        background: "white",
        borderLeft: "1px solid #cbcdce",
      }}
    >
      <section>
      <div className="semibold_14" style={{color: `${dark ? "white" : "black"}`}}>Notifications</div>

        <List
          itemLayout="horizontal"
          dataSource={notifications}
          renderItem={(item) => (
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <List.Item>
                <List.Item.Meta
                  avatar={item.icon}
                  title={<Text className="regular_14" style={{color: `${dark ? "white" : "black"}`}}>{item.title}</Text>}
                  description={item.time}
                />
              </List.Item>
            </motion.div>
          )}
        />
      </section>

      <section style={{ marginTop: 20 }}>
      <div className="semibold_14" style={{marginBottom:"20px", color: `${dark ? "white" : "black"}`}}>Activities</div>
      {activities.map((activity, index) => (
        <>
          <motion.div
          key={index}
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar  style={{width:"30px", height:"30px"}}/>
            <div style={{ marginLeft: 10 }}>
              <p className="regular_14" style={{ margin: 0,marginBottom:"5px" }}>{activity.title}</p>
              <p style={{ margin: 0, color: 'gray',marginBottom:"10px" }}>{activity.time}</p>
            </div>
          </div>
        </motion.div>
          <img src={dark ? bar_white : bar} style={{marginLeft:"6%"}}/> 
          </>
      ))}
      </section>

      <section style={{ marginTop: 20 }}>
        <Text strong style={{color: `${dark ? "white" : "black"}`}}>Contacts</Text>
        <List
          itemLayout="horizontal"
          dataSource={contacts}
          renderItem={(item) => (
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar style={{ backgroundColor: "#E5ECF6" }}>
                      {item.avatar}
                    </Avatar>
                  }
                  title={<Text className="regular_14" style={{color: `${dark ? "white" : "black"}`}}>{item.name}</Text>}
                />
              </List.Item>
            </motion.div>
          )}
        />
      </section>
    </div>
  );
};

export default NotificationBar;
