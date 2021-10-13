import Link from 'next/link';

import styles from './CategoriesMenu.module.css';

// params = { categories, ...}
const CategoriesMenu = ({ categories }) => {
    //const categories = params.categories;
    return (
        <div className={styles.menu}>

            <div className={styles.wrapper}>
                {categories.map(category => (
                    <div className={styles.category}>
                    <Link href={`/category/${category.slug}`}>{category.name}</Link>

                    </div>
                ))}

            </div>
        </div>   
    )

};

export default CategoriesMenu;