

function CardPresentacion() {
  return (
    <>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-card-bg-light dark:bg-card-bg-dark p-4 pt-8 md:pb-20 xl:pb-4">

        <img src="../foto1.png" alt="" className="mx-auto" />

        <div className="mt-4 grid grid-cols-2 gap-x-4">
          <p className="font-bold text-card-h2-light dark:text-card-h2-dark mt-3">NAME:</p>
          <p className="font-normal text-card-paragraph-light dark:text-card-paragraph-dark  mt-3">35</p>

          <p className="font-bold text-card-h2-light dark:text-card-h2-dark mt-3">AGE:</p>
          <p className="font-normal text-card-paragraph-light dark:text-card-paragraph-dark  mt-3">Married, 2 Kids</p>

          <p className="font-bold text-card-h2-light dark:text-card-h2-dark mt-3">EDUCATION:</p>
          <p className="font-normal text-card-paragraph-light dark:text-card-paragraph-dark  mt-3">Calgary, Alberta</p>

          <p className="font-bold text-card-h2-light dark:text-card-h2-dark mt-3">JOB:</p>
          <p className="font-normal text-card-paragraph-light dark:text-card-paragraph-dark  mt-3">University of Calgary</p>

          <p className="font-bold text-card-h2-light dark:text-card-h2-dark mt-3">LOCATION:</p>
          <p className="font-normal text-card-paragraph-light dark:text-card-paragraph-dark  mt-3">Family Physician</p>

          <p className="font-bold text-card-h2-light dark:text-card-h2-dark mt-3">HOBBIES:</p>
          <p className="font-normal text-card-paragraph-light dark:text-card-paragraph-dark  mt-3">Hiking and dancing</p>
        </div>
      </div>
    </>
  );
}


export default CardPresentacion;