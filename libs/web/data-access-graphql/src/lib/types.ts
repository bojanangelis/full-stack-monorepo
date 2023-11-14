export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type HomeBlock = {
  __typename?: 'HomeBlock';
  id: Scalars['ID']['output'];
  image: Image;
  imageId: Scalars['String']['output'];
  navigationPath: Scalars['String']['output'];
};

export type HomeBlockCountAggregate = {
  __typename?: 'HomeBlockCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imageId: Scalars['Int']['output'];
  navigationPath: Scalars['Int']['output'];
};

export type HomeBlockCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  image: ImageCreateNestedOneWithoutHomeBlockInput;
  navigationPath: Scalars['String']['input'];
};

export type HomeBlockCreateNestedOneWithoutImageInput = {
  connect?: InputMaybe<HomeBlockWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HomeBlockCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<HomeBlockCreateWithoutImageInput>;
};

export type HomeBlockCreateOrConnectWithoutImageInput = {
  create: HomeBlockCreateWithoutImageInput;
  where: HomeBlockWhereUniqueInput;
};

export type HomeBlockCreateWithoutImageInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  navigationPath: Scalars['String']['input'];
};

export type HomeBlockMaxAggregate = {
  __typename?: 'HomeBlockMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  navigationPath?: Maybe<Scalars['String']['output']>;
};

export type HomeBlockMinAggregate = {
  __typename?: 'HomeBlockMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  navigationPath?: Maybe<Scalars['String']['output']>;
};

export type HomeBlockRelationFilter = {
  is?: InputMaybe<HomeBlockWhereInput>;
  isNot?: InputMaybe<HomeBlockWhereInput>;
};

export type HomeBlockUpdateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<ImageUpdateOneRequiredWithoutHomeBlockNestedInput>;
  navigationPath?: InputMaybe<Scalars['String']['input']>;
};

export type HomeBlockUpdateOneWithoutImageNestedInput = {
  connect?: InputMaybe<HomeBlockWhereUniqueInput>;
  connectOrCreate?: InputMaybe<HomeBlockCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<HomeBlockCreateWithoutImageInput>;
  delete?: InputMaybe<HomeBlockWhereInput>;
  disconnect?: InputMaybe<HomeBlockWhereInput>;
  update?: InputMaybe<HomeBlockUpdateToOneWithWhereWithoutImageInput>;
  upsert?: InputMaybe<HomeBlockUpsertWithoutImageInput>;
};

export type HomeBlockUpdateToOneWithWhereWithoutImageInput = {
  data: HomeBlockUpdateWithoutImageInput;
  where?: InputMaybe<HomeBlockWhereInput>;
};

export type HomeBlockUpdateWithoutImageInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  navigationPath?: InputMaybe<Scalars['String']['input']>;
};

export type HomeBlockUpsertWithoutImageInput = {
  create: HomeBlockCreateWithoutImageInput;
  update: HomeBlockUpdateWithoutImageInput;
  where?: InputMaybe<HomeBlockWhereInput>;
};

export type HomeBlockWhereInput = {
  AND?: InputMaybe<Array<HomeBlockWhereInput>>;
  NOT?: InputMaybe<Array<HomeBlockWhereInput>>;
  OR?: InputMaybe<Array<HomeBlockWhereInput>>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageRelationFilter>;
  imageId?: InputMaybe<StringFilter>;
  navigationPath?: InputMaybe<StringFilter>;
};

export type HomeBlockWhereUniqueInput = {
  AND?: InputMaybe<Array<HomeBlockWhereInput>>;
  NOT?: InputMaybe<Array<HomeBlockWhereInput>>;
  OR?: InputMaybe<Array<HomeBlockWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<ImageRelationFilter>;
  imageId?: InputMaybe<Scalars['String']['input']>;
  navigationPath?: InputMaybe<StringFilter>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID']['output'];
  imagePath: Scalars['String']['output'];
  rgbBackground: RgbColor;
  rgbBackgroundId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ImageCountAggregate = {
  __typename?: 'ImageCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['Int']['output'];
  rgbBackgroundId: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type ImageCreateManyProductInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath: Scalars['String']['input'];
  rgbBackgroundId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageCreateManyProductInputEnvelope = {
  data: Array<ImageCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageCreateManyRgbBackgroundInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath: Scalars['String']['input'];
  productId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageCreateManyRgbBackgroundInputEnvelope = {
  data: Array<ImageCreateManyRgbBackgroundInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImageCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ImageCreateWithoutProductInput>>;
  createMany?: InputMaybe<ImageCreateManyProductInputEnvelope>;
};

export type ImageCreateNestedManyWithoutRgbBackgroundInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImageCreateOrConnectWithoutRgbBackgroundInput>>;
  create?: InputMaybe<Array<ImageCreateWithoutRgbBackgroundInput>>;
  createMany?: InputMaybe<ImageCreateManyRgbBackgroundInputEnvelope>;
};

export type ImageCreateNestedOneWithoutHomeBlockInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutHomeBlockInput>;
  create?: InputMaybe<ImageCreateWithoutHomeBlockInput>;
};

export type ImageCreateOrConnectWithoutHomeBlockInput = {
  create: ImageCreateWithoutHomeBlockInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutProductInput = {
  create: ImageCreateWithoutProductInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutRgbBackgroundInput = {
  create: ImageCreateWithoutRgbBackgroundInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateWithoutHomeBlockInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath: Scalars['String']['input'];
  product?: InputMaybe<ProductCreateNestedOneWithoutImagesInput>;
  rgbBackground: RgbColorCreateNestedOneWithoutImageInput;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageCreateWithoutProductInput = {
  homeBlock?: InputMaybe<HomeBlockCreateNestedOneWithoutImageInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath: Scalars['String']['input'];
  rgbBackground: RgbColorCreateNestedOneWithoutImageInput;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageCreateWithoutRgbBackgroundInput = {
  homeBlock?: InputMaybe<HomeBlockCreateNestedOneWithoutImageInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath: Scalars['String']['input'];
  product?: InputMaybe<ProductCreateNestedOneWithoutImagesInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageListRelationFilter = {
  every?: InputMaybe<ImageWhereInput>;
  none?: InputMaybe<ImageWhereInput>;
  some?: InputMaybe<ImageWhereInput>;
};

export type ImageMaxAggregate = {
  __typename?: 'ImageMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  rgbBackgroundId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ImageMinAggregate = {
  __typename?: 'ImageMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  rgbBackgroundId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ImageRelationFilter = {
  is?: InputMaybe<ImageWhereInput>;
  isNot?: InputMaybe<ImageWhereInput>;
};

export type ImageScalarWhereInput = {
  AND?: InputMaybe<Array<ImageScalarWhereInput>>;
  NOT?: InputMaybe<Array<ImageScalarWhereInput>>;
  OR?: InputMaybe<Array<ImageScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  imagePath?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  rgbBackgroundId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageUpdateManyWithWhereWithoutProductInput = {
  data: ImageUpdateManyMutationInput;
  where: ImageScalarWhereInput;
};

export type ImageUpdateManyWithWhereWithoutRgbBackgroundInput = {
  data: ImageUpdateManyMutationInput;
  where: ImageScalarWhereInput;
};

export type ImageUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImageCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ImageCreateWithoutProductInput>>;
  createMany?: InputMaybe<ImageCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ImageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ImageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ImageWhereUniqueInput>>;
  update?: InputMaybe<Array<ImageUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ImageUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ImageUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ImageUpdateManyWithoutRgbBackgroundNestedInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImageCreateOrConnectWithoutRgbBackgroundInput>>;
  create?: InputMaybe<Array<ImageCreateWithoutRgbBackgroundInput>>;
  createMany?: InputMaybe<ImageCreateManyRgbBackgroundInputEnvelope>;
  delete?: InputMaybe<Array<ImageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ImageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ImageWhereUniqueInput>>;
  update?: InputMaybe<Array<ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput>>;
  updateMany?: InputMaybe<Array<ImageUpdateManyWithWhereWithoutRgbBackgroundInput>>;
  upsert?: InputMaybe<Array<ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput>>;
};

export type ImageUpdateOneRequiredWithoutHomeBlockNestedInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutHomeBlockInput>;
  create?: InputMaybe<ImageCreateWithoutHomeBlockInput>;
  update?: InputMaybe<ImageUpdateToOneWithWhereWithoutHomeBlockInput>;
  upsert?: InputMaybe<ImageUpsertWithoutHomeBlockInput>;
};

export type ImageUpdateToOneWithWhereWithoutHomeBlockInput = {
  data: ImageUpdateWithoutHomeBlockInput;
  where?: InputMaybe<ImageWhereInput>;
};

export type ImageUpdateWithWhereUniqueWithoutProductInput = {
  data: ImageUpdateWithoutProductInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithWhereUniqueWithoutRgbBackgroundInput = {
  data: ImageUpdateWithoutRgbBackgroundInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithoutHomeBlockInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<ProductUpdateOneWithoutImagesNestedInput>;
  rgbBackground?: InputMaybe<RgbColorUpdateOneRequiredWithoutImageNestedInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageUpdateWithoutProductInput = {
  homeBlock?: InputMaybe<HomeBlockUpdateOneWithoutImageNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  rgbBackground?: InputMaybe<RgbColorUpdateOneRequiredWithoutImageNestedInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageUpdateWithoutRgbBackgroundInput = {
  homeBlock?: InputMaybe<HomeBlockUpdateOneWithoutImageNestedInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<ProductUpdateOneWithoutImagesNestedInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ImageUpsertWithWhereUniqueWithoutProductInput = {
  create: ImageCreateWithoutProductInput;
  update: ImageUpdateWithoutProductInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpsertWithWhereUniqueWithoutRgbBackgroundInput = {
  create: ImageCreateWithoutRgbBackgroundInput;
  update: ImageUpdateWithoutRgbBackgroundInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpsertWithoutHomeBlockInput = {
  create: ImageCreateWithoutHomeBlockInput;
  update: ImageUpdateWithoutHomeBlockInput;
  where?: InputMaybe<ImageWhereInput>;
};

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  homeBlock?: InputMaybe<HomeBlockRelationFilter>;
  id?: InputMaybe<StringFilter>;
  imagePath?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  rgbBackground?: InputMaybe<RgbColorRelationFilter>;
  rgbBackgroundId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  homeBlock?: InputMaybe<HomeBlockRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  rgbBackground?: InputMaybe<RgbColorRelationFilter>;
  rgbBackgroundId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHomeBlock: HomeBlock;
  createProduct: Product;
  createUser: User;
  removeHomeBlock: HomeBlock;
  removeProduct: Product;
  removeUser: User;
  updateHomeBlock: HomeBlock;
  updateProduct: Product;
  updateUser: User;
};


export type MutationCreateHomeBlockArgs = {
  data: HomeBlockCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationRemoveHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};


export type MutationRemoveProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateHomeBlockArgs = {
  data: HomeBlockUpdateInput;
  where: HomeBlockWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Product = {
  __typename?: 'Product';
  _count: ProductCount;
  availableColors?: Maybe<Array<RgbColor>>;
  /**
   * @Validator.@IsInt()
   * @Validator.@Min(1)
   * @Validator.@Max(100_000)
   */
  discountPrice?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Image>>;
  name: Scalars['String']['output'];
  /**
   * @Validator.@IsInt()
   * @Validator.@Min(1)
   * @Validator.@Max(100_000)
   */
  price: Scalars['Int']['output'];
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  discountPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  availableColors: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  discountPrice: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
};

export type ProductCreateInput = {
  availableColors?: InputMaybe<RgbColorCreateNestedManyWithoutProductInput>;
  discountPrice?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ImageCreateNestedManyWithoutProductInput>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type ProductCreateNestedOneWithoutAvailableColorsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutAvailableColorsInput>;
  create?: InputMaybe<ProductCreateWithoutAvailableColorsInput>;
};

export type ProductCreateNestedOneWithoutImagesInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<ProductCreateWithoutImagesInput>;
};

export type ProductCreateOrConnectWithoutAvailableColorsInput = {
  create: ProductCreateWithoutAvailableColorsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutImagesInput = {
  create: ProductCreateWithoutImagesInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutAvailableColorsInput = {
  discountPrice?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ImageCreateNestedManyWithoutProductInput>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type ProductCreateWithoutImagesInput = {
  availableColors?: InputMaybe<RgbColorCreateNestedManyWithoutProductInput>;
  discountPrice?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  discountPrice?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  discountPrice?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  discountPrice?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type ProductUpdateInput = {
  availableColors?: InputMaybe<RgbColorUpdateManyWithoutProductNestedInput>;
  discountPrice?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ImageUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductUpdateOneWithoutAvailableColorsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutAvailableColorsInput>;
  create?: InputMaybe<ProductCreateWithoutAvailableColorsInput>;
  delete?: InputMaybe<ProductWhereInput>;
  disconnect?: InputMaybe<ProductWhereInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutAvailableColorsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutAvailableColorsInput>;
};

export type ProductUpdateOneWithoutImagesNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<ProductCreateWithoutImagesInput>;
  delete?: InputMaybe<ProductWhereInput>;
  disconnect?: InputMaybe<ProductWhereInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutImagesInput>;
  upsert?: InputMaybe<ProductUpsertWithoutImagesInput>;
};

export type ProductUpdateToOneWithWhereWithoutAvailableColorsInput = {
  data: ProductUpdateWithoutAvailableColorsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateToOneWithWhereWithoutImagesInput = {
  data: ProductUpdateWithoutImagesInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateWithoutAvailableColorsInput = {
  discountPrice?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ImageUpdateManyWithoutProductNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductUpdateWithoutImagesInput = {
  availableColors?: InputMaybe<RgbColorUpdateManyWithoutProductNestedInput>;
  discountPrice?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductUpsertWithoutAvailableColorsInput = {
  create: ProductCreateWithoutAvailableColorsInput;
  update: ProductUpdateWithoutAvailableColorsInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpsertWithoutImagesInput = {
  create: ProductCreateWithoutImagesInput;
  update: ProductUpdateWithoutImagesInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  availableColors?: InputMaybe<RgbColorListRelationFilter>;
  discountPrice?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<ImageListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
};

export type ProductWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  availableColors?: InputMaybe<RgbColorListRelationFilter>;
  discountPrice?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ImageListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<IntFilter>;
};

export type Query = {
  __typename?: 'Query';
  findOne: User;
  homeBlock: HomeBlock;
  homeBlocks: Array<HomeBlock>;
  product: Product;
  products: Array<Product>;
  users: Array<User>;
};


export type QueryFindOneArgs = {
  where: UserWhereUniqueInput;
};


export type QueryHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RgbColor = {
  __typename?: 'RgbColor';
  Image?: Maybe<Array<Image>>;
  _count: RgbColorCount;
  b: Scalars['Int']['output'];
  g: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  r: Scalars['Int']['output'];
};

export type RgbColorAvgAggregate = {
  __typename?: 'RgbColorAvgAggregate';
  b?: Maybe<Scalars['Float']['output']>;
  g?: Maybe<Scalars['Float']['output']>;
  r?: Maybe<Scalars['Float']['output']>;
};

export type RgbColorCount = {
  __typename?: 'RgbColorCount';
  Image: Scalars['Int']['output'];
};

export type RgbColorCountAggregate = {
  __typename?: 'RgbColorCountAggregate';
  _all: Scalars['Int']['output'];
  b: Scalars['Int']['output'];
  g: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  r: Scalars['Int']['output'];
};

export type RgbColorCreateManyProductInput = {
  a?: InputMaybe<Scalars['Float']['input']>;
  b: Scalars['Int']['input'];
  g: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  r: Scalars['Int']['input'];
};

export type RgbColorCreateManyProductInputEnvelope = {
  data: Array<RgbColorCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RgbColorCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<RgbColorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RgbColorCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<RgbColorCreateWithoutProductInput>>;
  createMany?: InputMaybe<RgbColorCreateManyProductInputEnvelope>;
};

export type RgbColorCreateNestedOneWithoutImageInput = {
  connect?: InputMaybe<RgbColorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbColorCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<RgbColorCreateWithoutImageInput>;
};

export type RgbColorCreateOrConnectWithoutImageInput = {
  create: RgbColorCreateWithoutImageInput;
  where: RgbColorWhereUniqueInput;
};

export type RgbColorCreateOrConnectWithoutProductInput = {
  create: RgbColorCreateWithoutProductInput;
  where: RgbColorWhereUniqueInput;
};

export type RgbColorCreateWithoutImageInput = {
  a?: InputMaybe<Scalars['Float']['input']>;
  b: Scalars['Int']['input'];
  g: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<ProductCreateNestedOneWithoutAvailableColorsInput>;
  r: Scalars['Int']['input'];
};

export type RgbColorCreateWithoutProductInput = {
  Image?: InputMaybe<ImageCreateNestedManyWithoutRgbBackgroundInput>;
  a?: InputMaybe<Scalars['Float']['input']>;
  b: Scalars['Int']['input'];
  g: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  r: Scalars['Int']['input'];
};

export type RgbColorListRelationFilter = {
  every?: InputMaybe<RgbColorWhereInput>;
  none?: InputMaybe<RgbColorWhereInput>;
  some?: InputMaybe<RgbColorWhereInput>;
};

export type RgbColorMaxAggregate = {
  __typename?: 'RgbColorMaxAggregate';
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbColorMinAggregate = {
  __typename?: 'RgbColorMinAggregate';
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbColorRelationFilter = {
  is?: InputMaybe<RgbColorWhereInput>;
  isNot?: InputMaybe<RgbColorWhereInput>;
};

export type RgbColorScalarWhereInput = {
  AND?: InputMaybe<Array<RgbColorScalarWhereInput>>;
  NOT?: InputMaybe<Array<RgbColorScalarWhereInput>>;
  OR?: InputMaybe<Array<RgbColorScalarWhereInput>>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<IntFilter>;
  g?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  r?: InputMaybe<IntFilter>;
};

export type RgbColorSumAggregate = {
  __typename?: 'RgbColorSumAggregate';
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbColorUpdateManyMutationInput = {
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Int']['input']>;
  g?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  r?: InputMaybe<Scalars['Int']['input']>;
};

export type RgbColorUpdateManyWithWhereWithoutProductInput = {
  data: RgbColorUpdateManyMutationInput;
  where: RgbColorScalarWhereInput;
};

export type RgbColorUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<RgbColorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RgbColorCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<RgbColorCreateWithoutProductInput>>;
  createMany?: InputMaybe<RgbColorCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<RgbColorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RgbColorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RgbColorWhereUniqueInput>>;
  set?: InputMaybe<Array<RgbColorWhereUniqueInput>>;
  update?: InputMaybe<Array<RgbColorUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<RgbColorUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<RgbColorUpsertWithWhereUniqueWithoutProductInput>>;
};

export type RgbColorUpdateOneRequiredWithoutImageNestedInput = {
  connect?: InputMaybe<RgbColorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbColorCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<RgbColorCreateWithoutImageInput>;
  update?: InputMaybe<RgbColorUpdateToOneWithWhereWithoutImageInput>;
  upsert?: InputMaybe<RgbColorUpsertWithoutImageInput>;
};

export type RgbColorUpdateToOneWithWhereWithoutImageInput = {
  data: RgbColorUpdateWithoutImageInput;
  where?: InputMaybe<RgbColorWhereInput>;
};

export type RgbColorUpdateWithWhereUniqueWithoutProductInput = {
  data: RgbColorUpdateWithoutProductInput;
  where: RgbColorWhereUniqueInput;
};

export type RgbColorUpdateWithoutImageInput = {
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Int']['input']>;
  g?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<ProductUpdateOneWithoutAvailableColorsNestedInput>;
  r?: InputMaybe<Scalars['Int']['input']>;
};

export type RgbColorUpdateWithoutProductInput = {
  Image?: InputMaybe<ImageUpdateManyWithoutRgbBackgroundNestedInput>;
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Int']['input']>;
  g?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  r?: InputMaybe<Scalars['Int']['input']>;
};

export type RgbColorUpsertWithWhereUniqueWithoutProductInput = {
  create: RgbColorCreateWithoutProductInput;
  update: RgbColorUpdateWithoutProductInput;
  where: RgbColorWhereUniqueInput;
};

export type RgbColorUpsertWithoutImageInput = {
  create: RgbColorCreateWithoutImageInput;
  update: RgbColorUpdateWithoutImageInput;
  where?: InputMaybe<RgbColorWhereInput>;
};

export type RgbColorWhereInput = {
  AND?: InputMaybe<Array<RgbColorWhereInput>>;
  Image?: InputMaybe<ImageListRelationFilter>;
  NOT?: InputMaybe<Array<RgbColorWhereInput>>;
  OR?: InputMaybe<Array<RgbColorWhereInput>>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<IntFilter>;
  g?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  r?: InputMaybe<IntFilter>;
};

export type RgbColorWhereUniqueInput = {
  AND?: InputMaybe<Array<RgbColorWhereInput>>;
  Image?: InputMaybe<ImageListRelationFilter>;
  NOT?: InputMaybe<Array<RgbColorWhereInput>>;
  OR?: InputMaybe<Array<RgbColorWhereInput>>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<IntFilter>;
  g?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  r?: InputMaybe<IntFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};
