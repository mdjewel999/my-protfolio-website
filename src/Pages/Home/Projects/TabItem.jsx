import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SingleTabItem from "./SingleTabItem";

const TabItem = ({
  reactProjects,
  jsProjects,
  htmlCssProjects,
  setSingleProject,
}) => {
  // console.log(setSingleProject);
  return (
    <>
      <Tabs className="w-4/5 mx-auto">
        <TabList className="border-none outline-none flex justify-center items-center">
          <Tab>
            <p className="text-xs lg:text-xl font-bold bg-gradient-to-r bg-[#77037B] to-[#210062] px-2 lg:px-6 py-2 rounded-full text-white">
              ReactJS
            </p>
          </Tab>
          <Tab>
            <p className="text-xs lg:text-xl font-bold bg-gradient-to-r bg-[#77037B] to-[#210062] px-2 lg:px-6 py-2 rounded-full text-white">
              Javascript
            </p>
          </Tab>
          <Tab>
            <p className="text-xs lg:text-xl font-bold bg-gradient-to-r bg-[#77037B] to-[#210062] px-2 lg:px-6 py-2 rounded-full text-white">
              HTML & CSS
            </p>
          </Tab>
        </TabList>
        <TabPanel className="mx-auto lg:my-8">
          <SingleTabItem
            projects={reactProjects}
            setSingleProject={setSingleProject}
          />
        </TabPanel>
        <TabPanel className="mx-auto lg:my-8">
          <SingleTabItem
            projects={jsProjects}
            setSingleProject={setSingleProject}
          />
        </TabPanel>
        <TabPanel className="mx-auto lg:my-8">
          <SingleTabItem
            projects={htmlCssProjects}
            setSingleProject={setSingleProject}
          />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabItem;
