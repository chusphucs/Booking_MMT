import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=HaNoi,DaNang,TPHCM"
  );
  console.log(data);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://vietnamfasttours.com/wp-content/uploads/2019/04/hanoi-picks-up-two-prestigious-awards-1400x638.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hà Nội</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/736x/bd/90/5e/bd905ea492683386c25af8d6045353e2.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Đà Nẵng</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://nld.mediacdn.vn/2019/12/28/tp-hcm-ruc-ro-ve-dem-anh-hoang-trieu-4-15775262530931728274679.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>TP HCM</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
