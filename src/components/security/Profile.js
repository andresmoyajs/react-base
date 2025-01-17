import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../layout/Loader";
import { Link } from "react-router-dom";
import { MetaData } from "../layout/MetaData";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.security);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <MetaData titulo={"Mi Perfil"} />

      <h2 className="mt-5 ml-5">Mi Perfil</h2>
      <div className="row justify-content-around mt-5 user-info">
        <div className="col-12 col-md-3">
          <figure className="avatar avatar-profile">
            <img
              className="rounded-circle img-fluid"
              src={user && user.avatar}
              alt=""
            />
          </figure>
          <Link
            to="/me/update"
            id="edit_profile"
            className="btn btn-primary btn-block my-5"
          >
            Editar Perfil
          </Link>
        </div>

        <div className="col-12 col-md-5">
          <h4>Nombre</h4>
          <p>{user && user.nombre}</p>

          <h4>Apellido</h4>
          <p>{user && user.apellido}</p>

          <h4>Teléfono</h4>
          <p>{user && user.telefono}</p>

          <h4>Username</h4>
          <p>{user && user.username}</p>

          <h4>Email</h4>
          <p>{user && user.email}</p>

          {user && !user.roles.includes("ADMIN") && (
            <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
              Mis Ordenes
            </Link>
          )}

          <Link
            to="/password/update"
            className="btn btn-primary btn-block mt-3"
          >
            Cambiar Password
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
