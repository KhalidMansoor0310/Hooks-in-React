import React from 'react';
import { useContext } from "react";
import { UserContext } from '../App';

const Jumbotron = () => {
    const [user] = useContext(UserContext);
 
    return (
        <div class="jumbotron">
            <div className="row">
                <div className="col-md-6">
                    <h1 class="display-4 font-weight-bold text-success" >React Developer</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg bg-success border border-none" role="button">Learn more</a>
                </div>
                <div className="col-md-6">
                   <img src="" alt="" />
                </div>
            </div>

        </div>
    );
}

export default Jumbotron;