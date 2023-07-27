export default function home() {
  return (
    <main>
      <div className="flex justify-center mt-2 mx-3 p-1">
        <div className="bg-lightblue text-center py-2 rounded-md">
          <h1 className="text-xl font-bold">Film Findr</h1>
          <p className="mt-3">
            Search for any movie, include year to be more specific.
          </p>
          <p className="mt-3">Example info</p>
          <p className="mt-3 font-light">Ex. Spiderman (1999)</p>
        </div>
      </div>
    </main>
  );
}