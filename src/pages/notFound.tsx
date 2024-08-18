import NotFoundSvg from "../components/svg/notFoundSvg";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";


const NotFound = () => {

  const navigate = useNavigate()

  return (
<div className='not-found | flex flex-column justify-center align-center gap-250 f-width f-height'>

  <figure>
    <figcaption className="text-center">
        <a href="https://storyset.com/people" target="_blank">People illustrations by Storyset</a>
    </figcaption>
    <NotFoundSvg />
  </figure>

  <div className='flex flex-column align-center'>
    <h1 className="not-found_404">404</h1>
    <h2>Page Not Found</h2>
  </div>

  <p className='text-center mb-200'>Oops! Sorry, we could not find the page</p>

  <Button variant='primary' onClick={() => navigate(routes.home)}>
    Return Home
  </Button>

</div>
  );
};

export default NotFound;