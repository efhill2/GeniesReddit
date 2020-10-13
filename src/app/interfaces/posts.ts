export interface Posts {

   modhash: string;
   dist: number;
   children: Post[]

}

export interface Post {

    title: string;
    thumbnail: string;
    permalink: string;
}

