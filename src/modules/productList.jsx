import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton from "../components/loader/skelen";

const ProductList = ({ data, loading }) => {
  if (loading) return <Skeleton />;
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {data?.map((product) => (
          <Link key={product.id} to={product.href} className="group ">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={
                  product.ProductImages.filter((i) => i.defaultImage)[0].name
                }
                alt={product.imageAlt}
                className="h-full w-full object-cover opacity-80 object-center group-hover:opacity-100"
              />{" "}
              <div className="py-1 bg-slate-200 px-2">
                {" "}
                <h3 className="mt-4 text-sm text-current">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {product.description}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  ₱{product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

ProductList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      discounted: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      percentDiscount: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      sizes: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      ProductImages: PropTypes.shape({
        name: PropTypes.string.isRequired,
        defaultImage: PropTypes.bool.isRequired,
        ProductImageId: PropTypes.number.isRequired,
      }),
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};
