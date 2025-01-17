import { useParams } from "react-router-dom";
import "./section.styles.css";
import { useQuery } from "@tanstack/react-query";
import fetchSection from "../../actions/fetchSection";

const SectionPage = () => {
  const { id } = useParams();
  const results = useQuery({
    queryKey: ["Section-Details", id],
    queryFn: fetchSection,
  });
  if (results.isPending) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🤷‍♂️</h2>
      </div>
    );
  }
  if (results.error) {
    <h1>Error getting section</h1>;
  }

  const section = results.data[0];

  return (
    <div>
      <h1>Section</h1>
      <h1>{section.id}</h1>
      <p>{section.section_id}</p>
      <p>{section.semester}</p>
      <p>{section.year}</p>
      <p>{section.course_symbol}</p>
      <p>{section.course_number}</p>
      <p>{section.start_time}</p>
      <p>{section.end_time}</p>
      <p>{section.teacher_id}</p>
      <p>{section.room_number}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default SectionPage;
