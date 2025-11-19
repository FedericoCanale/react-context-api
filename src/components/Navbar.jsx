import { Link } from "react-router-dom";
import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext";

export default function Navbar() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    function toggleBudget() {
        setBudgetMode(!budgetMode);
    }

    return (
        <nav className="navbar">
            <div className="nav-container">


                <div className="nav-links">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/chi-siamo">Chi siamo</Link>
                    <Link className="nav-link" to="/prodotti">Prodotti</Link>
                </div>


                <div className="nav-spacer"></div>

                <button
                    className={`nav-budget-btn ${budgetMode ? "active" : ""}`}
                    onClick={toggleBudget}
                >
                    {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
                </button>

            </div>
        </nav>
    );
}