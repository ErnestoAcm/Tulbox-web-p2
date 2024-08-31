import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount2 } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import newsLetterImg from "../../assets/images/newsletter.png";
import Button from "@mui/material/Button";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 de descuento para tu primer pedido
              </p>
              <h3 className="text-white">
                Únete a nuestra noticias y recibe...
              </h3>
              <p className="text-light">
                Únase a nuestra suscripción de correo electrónico ahora para
                recibir actualizaciones sobre
                <br /> promociones y cupones.
              </p>

              <form className="mt-4">
                <IoMailOutline />
                <input
                  type="text"
                  placeholder="Su dirección de correo electrónico"
                />
                <Button>Suscribir</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src={newsLetterImg} />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="topInfo row">
            <div className="col d-flex align-items-center">
              <span>
                <LuShirt />
              </span>
              <span className="ml-2">Productos frescos todos los días</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <TbTruckDelivery />
              </span>
              <span className="ml-2">
                Envío gratuito para pedidos superiores a $70
              </span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <TbDiscount2 />
              </span>
              <span className="ml-2">Mega descuentos diarios</span>
            </div>

            <div className="col d-flex align-items-center">
              <span>
                <CiBadgeDollar />
              </span>
              <span className="ml-2">El mejor precio del mercado</span>
            </div>
          </div>

          <div className="row mt-5 linksWrap">
            <div className="col">
              <h5>PINTURAS Y RECUBRIMIENTOS</h5>
              <ul>
                <li>
                  <Link to="#">PINTURAS ACRILICAS</Link>
                </li>
                <li>
                  <Link to="#">SELLADORES</Link>
                </li>
                <li>
                  <Link to="#">PINTURA EN AEROSOL</Link>
                </li>
                <li>
                  <Link to="#">Adhesivos</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>HERRAMIENTAS</h5>
              <ul>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>MATERIALES DE CONSTRUCCION</h5>
              <ul>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>PLOMERIA</h5>
              <ul>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>JARDINERIA</h5>
              <ul>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
                <li>
                  <Link to="#">TEST</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright mt-3 pt-3 pb-3 d-flex">
            <p className="mb-0">
              Copyright 2024. Todos los derechos reservados.
            </p>
            <ul className="list list-inline ml-auto mb-0 socials">
              <li className="list-inline-item">
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
