import classes from "../style/List.module.css";

function List({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className={classes.person}>
            <img src={image} alt={name} className={classes.birthdayPicture} />
            <div>
              <h4 className={classes.fontH4}>{name}</h4>
              <p className={classes.fontP}>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
export default List;
