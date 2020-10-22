import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'antd-button-color'
import Container from 'react-bootstrap/Container'

import style from 'components/Products/detailStyle'

const title = "PRUWorks Life"

const ProductItem = () => {
  return(
    <>
      <section>
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p>
              PRUWorks Life merupakan produk asuransi jiwa kumpulan dari PT Prudential Life Assurance (Prudential Indonesia) bagi nasabah korporasi. Premi yang dibayarkan memberikan manfaat perlindungan (proteksi) jiwa berjangka bagi Tertanggung. Produk ini tersedia dalam mata uang Rupiah dan memberikan Manfaat Asuransi selama Polis masih aktif dan kepesertaan Tertanggung masih berlaku.
            </p>
            <a href="https://www.prudential.co.id/export/sites/prudential-id/.galleries/2020/PDF/Products/Product-Summary-PRUWorks-Life_200128_FA.pdf" target="_blank">
              <Button type="danger" className="mr-2">Unduh Informasi Produk</Button>
            </a>
            <a href="https://www.prudential.co.id/export/sites/prudential-id/.galleries/PDF/2020/Product/PRUWorks/PRU_Works_Life_Customize_Booklet_2020_03_24_Medium.pdf" target="_blank">
              <Button type="danger" className="mt-2" ghost>Unduh Brosur</Button>
            </a>
          </div>
        </Container>

        <Container className="mt-5">
          <Row>
            <Col lg={5} md={5} className="mb-3">
              <img src="/static/images/benefits/PRUWorks-Life_Landscape-2.jpg" className="w-100 h-100 img-fit" />
            </Col>
            <Col lg={7} md={7} className="mb-3">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1NMAJt3hJ7Q" allowFullScreen />
              </div>
            </Col>
          </Row>
        </Container>

      </section>

      <style jsx>{style}</style>
    </>
  )
}

export default ProductItem