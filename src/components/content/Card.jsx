import Button from "../UI/Button";

export default function Card({ image, name }) {
  return (
    <>
      <div
        className="bg-cover bg-center h-72 w-72 flex justify-center
        items-end transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 duration-300"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="pb-5">
          <Button>{name}</Button>
        </div>
      </div>
    </>
  );
}
