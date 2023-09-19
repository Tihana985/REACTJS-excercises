import PropTypes from "prop-types";

export const Semester = (props) => {

    return (
        <div>
          {
            props.showSemester ? (
              <h2>Winter semester</h2>
            ) : (
              <h2>Summer semester</h2>
            )
          }
        </div>
      )
    }
    
    Semester.propTypes = {
      showSemester: PropTypes.bool,
    }
    
    Semester.defaultProps = {
      showSemester: true,
    }