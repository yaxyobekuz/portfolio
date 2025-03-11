import React, { useEffect, useState } from "react";

// Firebase config
import { app } from "../firebase/config";

// Translate
import { useTranslation } from "react-i18next";

// Utils
import { sortProjectsByPin } from "../helpers";

// Components
import Icon from "../components/Icon";
import Searchbox from "../components/Searchbox";
import EmptyData from "../components/EmptyData";
import SpinLoader from "../components/SpinLoader";
import ProjectItem from "../components/ProjectItem";
import ProjectModal from "../components/ProjectModal";
import ProjectsFilterMenu from "../components/ProjectsFilterMenu";

// Firebase
import { collection, getDocs, getFirestore } from "firebase/firestore";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateProjectsData } from "../store/slices/projectsDataSlice";

// Images
import filterIcon from "../assets/images/icons/filter.svg";
import reloadIcon from "../assets/images/icons/reload.svg";

const Projects = () => {
  const db = getFirestore(app);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [projectType, setProjectType] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const { isOpen } = useSelector((state) => state.modals.project);
  const allProjects = useSelector((state) => state.projectsData.data);
  const [loader, setLoader] = useState(allProjects.length > 0 ? false : true);

  // fetches the list of projects from the 'projects' collection in the database
  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return projectsList;
    } catch (error) {
      throw new Error("Failed to fetch projects");
    }
  };

  // manages the fetching of project data, setting state based on the results
  const loadProjectsData = () => {
    setError(false);
    setLoader(true); // Show loader while data is being fetched
    fetchProjects()
      .then((projects) => {
        if (projects?.length > 0) {
          dispatch(updateProjectsData(projects));
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoader(false)); // Hide loader after data fetch completes
  };

  // load project data when component mounts
  useEffect(() => {
    if (0 >= allProjects?.length) {
      loadProjectsData();
    }
  }, []);

  // filter projects
  useEffect(() => {
    if (allProjects?.length > 0) {
      if (0 >= query?.length && (!projectType || projectType === "all")) {
        setFilteredProjects(sortProjectsByPin(allProjects));
      } else {
        const filtered = allProjects.filter((project) => {
          const search = project.title[currentLanguage]
            .toLowerCase()
            .includes(query);
          const type =
            !projectType || projectType === "all"
              ? true
              : project.type.toLowerCase().includes(projectType);
          const tag = project.tags.some(
            (tag) => tag.toLowerCase().trim() === query
          );

          return (search || tag) && type;
        });

        setFilteredProjects(filtered);
      }
    }
  }, [query, projectType, allProjects]);

  const handleQueryChange = (value) => {
    setQuery(value);
  };

  const handleProjectTypeChange = (value) => {
    setProjectType(value);
  };

  return (
    <>
      {/* Page */}
      <div className="py-8 space-y-12 xl:py-10">
        {/* Page main content */}
        <div className="space-y-9">
          {/* page title */}
          <h1 className="title-rectangle">{t("projects_page_title")}</h1>

          {/* filter */}
          <div className="space-y-5">
            {/* filter title */}
            <strong className="flex items-center gap-3.5">
              <span className="font-normal text-xl sm:font-medium">
                {t("filter")}
              </span>
              <Icon src={filterIcon} />
            </strong>

            {/* search box wrapper  */}
            <div className="flex items-center justify-between gap-3.5 relative z-2 sm:gap-4 md:gap-5">
              {/* search box */}
              <Searchbox onChange={handleQueryChange} />

              {/* projects filter menu */}
              <ProjectsFilterMenu onChange={handleProjectTypeChange} />
            </div>
          </div>

          {/* projects */}
          {!loader && (
            <div className="">
              {/* Error message */}
              {error ? (
                <div className="flex flex-col justify-center gap-5 sm:text-center sm:items-center sm:h-80">
                  {/* title */}
                  <h3 className="text-lg xs:text-xl">{t("error_msg.title")}</h3>

                  {/* description */}
                  <p className="opacity-50 xs:text-lg">
                    {t("error_msg.description")}
                  </p>

                  {/* reload btn */}
                  <button
                    disabled={loader}
                    onClick={loadProjectsData}
                    className="btn-primary px-6 max-w-max"
                  >
                    <span className="text-base">{t("reload")}</span>
                    <Icon src={reloadIcon} alt="reload icon" />
                  </button>
                </div>
              ) : // Projects list
              filteredProjects?.length > 0 ? (
                <ul className="grid grid-cols-1 gap-x-5 gap-y-8 sm:gap-y-6 md:grid-cols-2">
                  {filteredProjects.map((project, index) => {
                    return <ProjectItem key={project.id} data={project} />;
                  })}
                </ul>
              ) : (
                // Empty data
                <EmptyData />
              )}
            </div>
          )}

          {/* loader */}
          {loader && (
            <div className="flex items-center justify-center gap-5 h-40 animate-pulse sm:h-80">
              <h3 className="xs:text-lg">{t("loading_data")}</h3>
              <SpinLoader iconSize={28} />
            </div>
          )}
        </div>
      </div>

      {/* Project modal */}
      {isOpen && <ProjectModal />}
    </>
  );
};

export default Projects;
